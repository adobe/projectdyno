const contentCharacterLength = (value: string) => value.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').length

export default contentCharacterLength
