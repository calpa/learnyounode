var argv = process.argv, length = process.argv.length;

var ans = 0;

for (var i = 2; i < length; i++) {
    ans += +argv[i];
}

console.log(ans);
