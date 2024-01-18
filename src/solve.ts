import { evaluate } from "mathflow";

// a function that solves the given expression using mathflow's evaluate function
export default function solve(expr: string = ""): string {
    let result: string = !expr.includes("#") ? `<div>Solving: ${expr}</div>` : "";

    try {
        const output = evaluate(expr);

        if (output.solution.length > 2) {
            output.solution.forEach((step) => (result += `<div>= ${step}</div>`));
            result += `<div><br/>Answer: ${output.value}</div>`;
        } else {
            result += `<div>Answer: ${output.value}</div>`;
        }
    } catch (error) {
        result = `${error}`;
    }

    return result;
}
