export function itemsView({ items }) {

    const listItems = items.map(item => `<li>${item.label}</li>`).join("\n");

    return `
    <section aria-label="items section">
        <h2>A list of items</h2>
        <form method="POST" action="/items">
            <label for="new-item">new item:</label>
            <input id="new-item" name="new-item" required>
        </form>
        <ul>
            ${listItems}
        </ul>
    </section>
    `
}