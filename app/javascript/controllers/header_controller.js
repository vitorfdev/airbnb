import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from "el-transition"

export default class extends Controller {
  static targets = ['dropdown', 'openUserMenu']

  connect() {
    this.openUserMenuTarget.addEventListener("click", (e) => {
      openDropDown(this.dropdownTarget)
    })
  }

}

function openDropDown(element) {
  toggle(element).then(() => {
    console.log("Enter transition complete")
  })
}

function closeDropDown() {
  leave(this.dropdownTarget).then(() => {
    this.dropdownTarget.destroy()
  })
}