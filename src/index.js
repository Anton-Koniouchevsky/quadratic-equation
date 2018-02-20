module.exports = function solveEquation(equation) {
    let coeffs = equation.replace(/\s/g, '').match(/[^\^]\d+/g);
    let a = coeffs[0],
        b = coeffs[1],
        c = coeffs[2];

    let discRoot = Math.sqrt(b * b - 4 * a * c);

    return [(-b - discRoot) / (2 * a),
        (-b + discRoot) / (2 * a)
    ].map(x => Math.round(x)).sort((left, right) => left - right);
}