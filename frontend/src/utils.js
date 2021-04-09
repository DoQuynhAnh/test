export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split("/");
  return {
    resource: request[1],
    id: request[2],
  };
};

export const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length == 1 ? elements[0] : elements;
};

export const reRender = async (cpn, position = "") => {
  position
    ? ($(position).innerHTML = await cpn.render())
    : ($("#main-content").innerHTML = await cpn.render());
    console.log("reRender");
  await cpn.afterRender();
};

export const uuid = () => {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
};
