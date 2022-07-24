export default {
  scene1: {
    label: "Intro",
    type: "object",
    props: {
      website: {
        label: "Website Name",
        type: "string",
      },
      backgroundColor: { label: "Background Color", type: "color" },
      fontColor: { label: "Font Color", type: "color" },
    },
  },
  scene2: {
    label: "Welcome",
    type: "object",
    props: {
      title: { label: "Title", type: "string" },
      header: { label: "Header", type: "string" },
      footer: { label: "Footer", type: "string" },
      backgroundColor: { label: "Background Color", type: "color" },
      fontColor: { label: "Font Color", type: "color" },
    },
  },
  scene3: {
    label: "Presentation 1",
    type: "object",
    props: {
      image: { label: "Image URL", type: "string" },
      header: { label: "Header", type: "string" },
      paragraph: { label: "Paragraph", type: "string" },
      footer: { label: "Footer", type: "string" },
      backgroundColor: { label: "Background Color", type: "color" },
      fontColor: { label: "Font Color", type: "color" },
    },
  },
  scene4: {
    label: "Presentation 2",
    type: "object",
    props: {
      image: { label: "Image URL", type: "string" },
      header: { label: "Header", type: "string" },
      paragraph: { label: "Paragraph", type: "string" },
      footer: { label: "Footer", type: "string" },
      backgroundColor: { label: "Background Color", type: "color" },
      fontColor: { label: "Font Color", type: "color" },
    },
  },
};
