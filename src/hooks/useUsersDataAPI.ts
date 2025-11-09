import type { IUserForm } from "../components/Users/IUserForm";
import { defaultUserData, useUsersData, type UserDataType } from "../contexts/UsersDataContext";
import { LOCAL_STORAGE_USERS_KEY } from "../data/constants";

export const useUsersDataAPI = () => {
    const { usersData, setUsersData } = useUsersData();

    const getUsers = async (): Promise<UserDataType[] | null> => {
        try {
            const stored = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);
            if (stored) {
                const parsed = JSON.parse(stored) as UserDataType[];
                return Promise.resolve(parsed);
            } else {
                return Promise.resolve(null);
            }
        } catch (error) {
            console.error('Failed to fetch users data:', error);
            return Promise.resolve(null);
        }
    };

    const getUserById = async (userId: string): Promise<UserDataType> => {
        try {
            const users = await getUsers();
            const targetUser = (users || []).find((userItem) => userItem.id === userId);
            return targetUser ?? defaultUserData;
        } catch (error) {
            console.error('Failed to fetch user data:', error);
            throw error;
        }
    };

    const createUser = async (formData: IUserForm): Promise<UserDataType> => {
        try {
            const stored = localStorage.getItem(LOCAL_STORAGE_USERS_KEY);
            const existingUsers: UserDataType[] = stored ? JSON.parse(stored) : [];

            const userId = `pdfn:users:${existingUsers.length + 1}`;

            const createdUser: UserDataType = {
                id: userId,
                name: `${formData.firstName || ''} ${formData.lastName || ''}`,
                firstName: formData.firstName || '',
                lastName: formData.lastName || '',
                age: formData.age || '',
                email: formData.email || '',
                role: formData.role || ''
            };

            // Avoid duplicate user IDs
            const exists = existingUsers.some((u) => u.id === createdUser.id);
            if (exists) {
                console.warn(`User with ID ${createdUser.id} already exists. Skipping creation.`);
                return createdUser;
            }

            // Update localStorage
            const updatedUsers = [...existingUsers, createdUser];
            localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(updatedUsers));

            // Update context state
            setUsersData(updatedUsers);

            return createdUser;
        } catch (error) {
            console.error('Failed to create user:', error);
            throw error;
        }
    };

    const updateUser = async (userId: string, formData: IUserForm): Promise<UserDataType> => {
        try {
            if (!userId) throw new Error(`No user found with id ${userId}`);
            
            const updatedUser : UserDataType = {
                id: userId,
                name: `${formData.firstName || ''} ${formData.lastName || ''}`,
                firstName: formData.firstName || '',
                lastName: formData.lastName || '',
                age: formData.age || '',
                email: formData.email || '',
                role: formData.role || ''
            };

            const updatedUsers = (usersData || []).map((userItem) =>
            userItem.id === userId
                ? { ...updatedUser }
                : userItem
            );

            setUsersData(updatedUsers);

            return await getUserById(userId);
        } catch (error) {
            console.error('Failed to update user data:', error);
            throw error;
        }
    };

    return {
        getUsers,
        getUserById,
        createUser,
        updateUser
    };
}