export const fetchRequest = async (url: string, options?: any) => {
    const response = await fetch(url, options);

    if (!response.ok) {
        return Promise.reject(await response.json());
    }
    if (response.status === 204) {
        return Promise.resolve();
    }
    return Promise.resolve(response.json());
}