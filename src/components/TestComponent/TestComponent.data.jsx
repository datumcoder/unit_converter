export const testData = [
  {
    title: "First title",
    styles: {
      container: "testContainer--1",
      title: "title--1",
    },
    content: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>,
  },
  {
    title: "Second title",
    styles: {
      container: "testContainer--2",
      title: "title--2",
    },
    content: <h2>Some subtitle</h2>,
  },
  {
    title: "Third title",
    styles: {
      container: "testContainer--3",
      title: "title--3",
    },
    content: null,
  },
  {
    title: "Fourth title",
    styles: {
      container: "testContainer--4",
      title: "title--4",
    },
    content: (
      <ol>
        <li>I</li>
        <li>II</li>
        <li>III</li>
      </ol>
    ),
  },
  {
    title: "Fifth title",
    styles: {
      container: "testContainer--5",
      title: "title--5",
    },
    content: (
      <div>
        <h2>Subtitle</h2>
        <div>
          <h3>Another subtitle</h3>
          <p>Some text</p>
        </div>
      </div>
    ),
  },
];
