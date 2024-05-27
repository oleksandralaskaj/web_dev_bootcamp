export class ReqOptions {
    constructor(title, points) {
        this.create(title, points)
    }

    create(title, points) {
        return `{
            "method": "POST",
            "body": JSON.stringify(
                {
                    "rating_subject": ${title},
                    "rating_value": ${points}
                }),
                "headers": { 'Content-Type': 'application/json}}`
    }
}