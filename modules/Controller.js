export function getData (data) {
    const address = data.resolvedAddress;
    const description = data.description;
    const conditions = data.currentConditions.conditions;
    const sensationTerm = data.currentConditions.feelslike;
    const temp = data.currentConditions.temp;

    return [ address, description, conditions, sensationTerm, temp ];
}
