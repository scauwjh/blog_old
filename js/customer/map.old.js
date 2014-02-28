/**
 * Map for javascript old version
 * function: get(key) put(key, value) size()
 *  other function will add
 * example: 
 *  var map = new Map();
 *  map.put("a","test");
 *  var tmp = map.get("a");
 */
function Map(){
    var struct = function(key, value){
        this.key = key;
        this.value = value;
    }
    var put = function(key, value){
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].key === key) {
                this.arr[i].value = value;
                return;
            }
        }
        this.arr[this.arr.length] = new struct(key, value);
    }
    var get = function(key){
        for(var i = 0; i < this.arr.length; i++) {
            if(this.arr[i].key === key)
                return this.arr[i].value;
        }
        return null;
    }
    var size = function(){
        return this.arr.length;
    }
    
    /* The following lines is for debugging */
    /*
    function pre_traversal_print(index) {
        if (tree[index] == null)
            return;
        console.log("key:" + tree[index].key + " value:" + tree[index].val);
        pre_traversal_print(index*2+1);
        pre_traversal_print(index*2+2);
    }

    var debug = function() {
        var key = ["hello", "world", "my", "name", "is", "wjh"];
        var value = [1, 2, 3, 4, 5, 6];
        for (var i = 0; i < key.length; i++) {
         put(key[i], value[i]);
        }
        for (var i = 0; i < key.length; i++)
         console.log(get(key[i]));

        //FOR TIME TEST
        // alph["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"];
        // for (var i = 0; i < 100000; i++) {
        //     var tmp = Math.random() % alph.length;
        // }
    }
    this.debug = debug;
    */
    this.arr = new Array();
    this.put = put;
    this.get = get;
    this.size = size;
}