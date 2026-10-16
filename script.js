
document.getElementById("year").textContent =
  new Date().getFullYear();

const postList = document.getElementById("post-list");

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined && text !== null) {
    element.textContent = text;
  }
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

    if (Array.isArray(post.sentences) && post.sentences.length > 0) {
      const heading = makeElement("h4", "", "English Sentences with Hindi Meaning");
      card.append(heading);

      const list = makeElement("ol", "sentence-list");

      post.sentences.forEach((sentence) => {
        const item = document.createElement("li");
        item.append(makeElement("p", "", sentence.hindi));
        item.append(makeElement("p", "", sentence.english));
        list.append(item);
      });

      card.append(list);
    }

    if (post.videoUrl) {
      const link = makeElement("a", "btn", "Visit YouTube Channel");
      link.href = post.videoUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      card.append(link);
    }

    postList.append(card);
  });
}

renderPosts();
