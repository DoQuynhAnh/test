import FeedBackApi from "../api/feedBack";
import { parseRequestUrl } from "../utils";

const ViewDetailFeed = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: item } = await FeedBackApi.get(id);
    return /*html*/ `
  
    <Form class="mt-3 border p-2 col-sm-8 mx-auto" id="add_new" encType='multipart/form-data' >
      <h2 class="text-center">Chi tiết Contact</h2>
      <div class="form-group">
        <Label for="name">Name: </Label>
        <input 
          class="form-control"
          name="name"
        value=${item.name}
          disabled
          />
      </div>
      <div class="form-group">
        <Label for="name">Email: </Label>
        <input 
          class="form-control"
          name="name"
          value=${item.email} 
          disabled
          />
      </div>
      <div class="form-group">
        <Label for="name">Số điện thoại: </Label>
        <input 
          class="form-control"
          name="name"
          value=${item.sdt} 
          disabled
          />
      </div>
      <div class="form-group">
        <Label for="">Message: </Label>
        <textarea class="form-control" id="w3review" name="w3review" rows="4" cols="50" disabled>
          ${item.msg}
        </textarea>

        </div>
      </div>
      <div class="d-flex justify-content-center w-100">
        <a 
          href="#/admin"
          class="btn btn-primary">
          back to admin
        </a>
      </div>
    </Form>

    `;
  },
};

export default ViewDetailFeed;
