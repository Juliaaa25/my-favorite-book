fetch("https://juliaaa25.github.io/my-favorite-book/book.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Не удалось загрузить JSON");
    }
    return response.json();
  })
  .then((data) => {
    const div = document.getElementById("book-info");
    div.innerHTML = `
      <p><strong>Название:</strong> ${data.title}</p>
      <p><strong>Автор:</strong> ${data.author}</p>
      <p><strong>Год:</strong> ${data.year}</p>
    `;
  })
  .catch((error) => {
    document.getElementById("book-info").textContent = "Ошибка загрузки 😢";
    console.error(error);
  });
