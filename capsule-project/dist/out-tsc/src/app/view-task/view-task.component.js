var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { APIService } from '../api.service';
var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(apiService) {
        this.apiService = apiService;
        this.tasks = [];
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    ViewTaskComponent.prototype.getTasks = function () {
        var _this = this;
        this.apiService.getTasks().subscribe(function (data) {
            _this.tasks = data;
            console.log(data);
        });
    };
    ViewTaskComponent = __decorate([
        Component({
            selector: 'app-view-task',
            templateUrl: './view-task.component.html',
            styleUrls: ['./view-task.component.css']
        }),
        __metadata("design:paramtypes", [APIService])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());
export { ViewTaskComponent };
//# sourceMappingURL=view-task.component.js.map