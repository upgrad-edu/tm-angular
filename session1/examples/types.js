var isAdmin = true;
var duration = 150;
var firstName = "Ifrah";
var language = ["English", "Hindi", "Telegu"];
var userRole = ["User", 100];
var role;
(function (role) {
    role[role["Admin"] = 0] = "Admin";
    role[role["User"] = 1] = "User";
})(role || (role = {}));
;
var customerOne = role[1];
console.log(customerOne);
var useful = undefined;
