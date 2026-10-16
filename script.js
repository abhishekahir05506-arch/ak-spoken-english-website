
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

    const details = makeElement("div", "post-details");
    details.hidden = true;

    if (Array.isArray(post.sentences) && post.sentences.length > 0) {
      details.append(
        makeElement("h4", "", "English Sentences with Hindi Meaning")
      );

      const list = document.createElement("ol");

      post.sentences.forEach((sentence) => {
        const item = document.createElement("li");
        item.append(makeElement("p", "", sentence.hindi));
        item.append(makeElement("p", "", sentence.english));
        list.append(item);
      });

      details.append(list);
    } else if (post.category === "Vocabulary") {
      details.append(
        makeElement("p", "", "Learn new English words and their Hindi meanings. Practice each word in a sentence every day.")
      );
    } else if (post.category === "Knowledge") {
      details.append(
        makeElement("p", "", "A computer is an electronic device that accepts data, processes it, and gives information. Learn about hardware, software, input devices and output devices.")
      );
    } else {
      details.append(
        makeElement("p", "", post.description)
      );
      details.append(
        makeElement("p", "", "Practice these sentences aloud every day to improve your English speaking.")
      );
    }

    card.append(details);

    const readButton = makeElement("button", "btn", "Read More");
    readButton.type = "button";
    readButton.addEventListener("click", () => {
      details.hidden = !details.hidden;
      readButton.textContent = details.hidden ? "Read More" : "Show Less";
    });

    card.append(readButton);

    // Show Watch Video only when a specific YouTube video URL is provided.
    const url = post.videoUrl || "";
    const isSpecificVideo =
      url.includes("youtu.be/") ||
      url.includes("youtube.com/watch") ||
      url.includes("youtube.com/shorts/");

    if (isSpecificVideo) {
      const link = makeElement("a", "btn", "Watch Video");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      card.append(link);
    }

    postList.append(card);
  });
}

renderPosts();
