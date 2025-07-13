const jsonURL = "https://juliaaa25.github.io/my-favorite-book/";

fetch(jsonURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ошибка при загрузке JSON");
    }
    return response.json();
  })
  .then((data) => {
    const bookDiv = document.getElementById("book-info");
    bookDiv.innerHTML = `
      <p><strong>Название:</strong> ${data.title}</p>
      <p><strong>Автор:</strong> ${data.author}</p>
      <p><strong>Год:</strong> ${data.year}</p>
    `;
  })
  .catch((error) => {
    document.getElementById("book-info").textContent =
      "Не удалось загрузить данные 😢";
    console.error(error);
  });
