

export const isJsonString = (data: string) => {
    try {
        JSON.parse(data)
    } catch (error) {
        return false
    }
    return true
}