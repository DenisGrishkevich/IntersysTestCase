function optionalPow(a, b) {
    const message = `Do you want to calculate ${a}^${b}?`;
    return confirm(message) ? Math.pow(a, b) : Math.pow(b, a);
}