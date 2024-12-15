interface ApiData {
    [key: string]: string | number | boolean | undefined
}

export const makeApiRequest = async (endpoint: string, data: ApiData) => {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return await response.json()
    } catch (error) {
        console.error('API request failed:', error)
        throw error
    }
} 