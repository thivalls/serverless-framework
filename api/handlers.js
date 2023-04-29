"use restrict"

function extractBody(event) {
    if(!event?.body) {
        return {
            statusCode: 422,
            error: JSON.stringify({ error: "Missing body" })
        }
    }

    return JSON.parse(event.body)
}

module.exports.sendResponse = async (event) => {
    let body = extractBody(event)

    return {
        statusCode: 201,
        body: JSON.stringify(body)
    }
}