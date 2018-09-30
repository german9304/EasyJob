import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import {StyleServiceService} from "./style-service.service"
@Directive({
  selector: "[appTest]"
})
export class TestDirective {
  constructor(private st: StyleServiceService) {}
  @HostListener("click", ["$event.target"])
  onClick(el) {
    if (el.id == "search-input") {
      this.st.searchForm = true;
      console.log('search: ',this.st.searchForm )
    }else{
    	this.st.searchForm = false;
    	console.log('search: ',this.st.searchForm )
    }
  }
}
