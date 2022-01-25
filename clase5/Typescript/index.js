"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Team2 = exports.TeamEquipo = exports.Team = void 0;
var Team = /** @class */ (function () {
    function Team(id, name) {
        this.id = id;
        this.name = name;
    }
    return Team;
}());
exports.Team = Team;
var TeamEquipo = /** @class */ (function (_super) {
    __extends(TeamEquipo, _super);
    function TeamEquipo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.level = 1;
        return _this;
    }
    return TeamEquipo;
}(Team));
exports.TeamEquipo = TeamEquipo;
var Team2 = /** @class */ (function () {
    function Team2() {
    }
    return Team2;
}());
exports.Team2 = Team2;
var team = new Team(1, "River Plate");
var teamE = new TeamEquipo(2, "juventud");
console.log(team);
console.log(teamE);
/****************************************** */
