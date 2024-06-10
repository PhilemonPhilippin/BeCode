function generateBg(color, delay) {
  const rand = Math.random();
  return new Promise((resolve, reject) => {
    if (rand > 0.7) {
      reject();
    } else {
      setTimeout(() => {
        document.body.style.backgroundColor = color;
        resolve();
      }, delay);
    }
  });
}

const callGenerateBg = async () => {
  try {
    const colors = [
      "blue",
      "yellow",
      "red",
      "cyan",
      "violet",
      "green",
      "purple",
    ];
    for (const color of colors) {
      await generateBg(color, 1000);
    }
  } catch (ex) {
    console.log("oh no! an error");
  }
};

callGenerateBg();
