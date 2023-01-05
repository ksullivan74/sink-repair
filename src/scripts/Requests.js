import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(
                    (request) => {
                    return `<li>${request}</li>`
                }
                ).join("")
            }
        </ul>
    `
    return html
}