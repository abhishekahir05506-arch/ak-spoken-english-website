
document.getElementById("year").textContent =
  new Date().getFullYear();

const postList = document.getElementById("post-list");

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderPosts() {
  postList.replaceChildren();

  if (!Array.isArray(posts) || posts.length === 0) {
    postList.append(
      makeElement("p", "", "New posts will be added soon.")
    );
    return;
  }

  posts.forEach((post) => {
    const card = makeElement("article", "card");
    card.append(makeElement("p", "post-category", post.category));
    card.append(makeElement("h3", "", post.title));
    card.append(makeElement("p", "post-date", post.date));
    card.append(makeElement("p", "", post.description));

    if (post.videoUrl) {
      const link = makeElement("a", "btn", "Watch Video");
      link.href = post.videoUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      card.append(link);
    }

    postList.append(card);
  });
}

renderPosts();
 