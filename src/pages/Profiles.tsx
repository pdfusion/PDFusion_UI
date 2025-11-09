import React, { useEffect, useState } from 'react';
import { type UserDataType, defaultUserData } from '../contexts/UsersDataContext';
import { useUsersDataAPI } from '../hooks/useUsersDataAPI';

const Profiles: React.FC = () => {
  const [profilesData, setProfilesData] = useState<UserDataType[] | null>([defaultUserData]);
  const { getUsers } = useUsersDataAPI();

  useEffect(() => {
    (async () => {
      const profilesDataRes = await getUsers();
      setProfilesData(profilesDataRes);
    })();
  }, []);
  
  //TODO: Remove below console.log when table is ready.
  console.log('sr log profilesData:', profilesData);

  return (
    <div>
      <h2>Profiles Component</h2>
      <p>Open the console to see logged profiles data.</p>
    </div>
  );
};

export default Profiles;