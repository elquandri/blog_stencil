import {Component, State, Prop} from "@stencil/core";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: "app-add",
  styleUrl: "../../global/global.css",
  shadow: true
})
export class AppAdd {
  @State()  title: string;
  @State()  article: string;
  @State()  author: string;
  @Prop()   home : RouterHistory;


  reculer(){
    this.home.goBack();
  }


  postArticle(e) {
    e.preventDefault();
    console.log("!");
    const title = this.title;
    const article = this.article;
    const autor = this.author;
    const payload = {
      title,
      article,
      autor
    };

    fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(res) { this.reculer();
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  }

  render() {
    return (
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline is-mobile is-centered">
            <div class="column is-8 is-centered">
              <div class="header-content">
                <div class="has-text-centered">
                  <h1 class="title c3">New Artical</h1>
                </div>
              </div>

              <div class="subheader-content has-text-centered">
                <div class="nav-center">
                  <a class="nav-item">
                    <span class="icon">
                      <i class="fa fa-facebook" />
                    </span>
                  </a>
                  <a class="nav-item">
                    <span class="icon">
                      <i class="fa fa-twitter" />
                    </span>
                  </a>
                  <a class="nav-item">
                    <span class="icon">
                      <i class="fa fa-instagram" />
                    </span>
                  </a>
                  <a class="nav-item">
                    <span class="icon">
                      <i class="fa fa-rss" />
                    </span>
                  </a>
                </div>
                <hr />
              </div>

              <div class="single-content">
                <form>
                  <div class="field">
                    <label class="label">Title</label>
                    <p class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                        onInput={(e: any) => (this.title = e.target.value)}
                      />
                    </p>
                  </div>

                  <div class="field">
                    <label class="label">Artical</label>
                    <p class="control">
                      <textarea
                        class="textarea"
                        placeholder="Textarea"
                        onInput={(e: any) => (this.article = e.target.value)}
                      />
                    </p>
                  </div>
                  <div class="field">
                    <label class="label">Autor</label>
                    <p class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Email input"
                        onInput={(e: any) => (this.author = e.target.value)}
                      />
                    </p>
                  </div>
                  <div class="field is-grouped">
                    <p class="control">
                      <stencil-route-link url="/">
                      <button
                        class="button is-danger"
                        onClick={this.postArticle.bind(this)}
                      >
                        Add
                      </button>
                      </stencil-route-link>
                    </p>
                    <stencil-route-link url="/" >
                    <p class="control">
                      <button class="button is-warning">Cancel</button>
                    </p>
                    </stencil-route-link>
                  </div>
                </form>
              </div>
              <div class="has-text-right">
                <p>
                  <stencil-route-link url="/" >
                   <button class="button">
                    Back to Home
                   </button>
                  </stencil-route-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
