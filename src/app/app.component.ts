import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f", { static: false }) signupForm: NgForm;
  email = "";
  subscriptionTypes = ["Basic", "Advanced", "Pro"];
  subscriptionType = "Advanced";
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
