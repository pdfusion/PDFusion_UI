export function getIdFromPdfn(pdfn: string) {
    return pdfn.split('').pop() || '';
}