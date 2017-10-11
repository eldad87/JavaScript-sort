Array.prototype.swap = function(i, z) {
    var tmp = this[i];
    this[i] = this[z];
    this[z] = tmp;
};

Array.prototype.bubbleSort = function() {
    var swappedItems = false;
    for(var maxRange = this.length -1; maxRange>=0; maxRange--) {
        swappedItems = false;
        for(var i=0; i<maxRange; i++) {
            if(this[i +1]!==undefined && this[i] > this[i +1]) {
                this.swap(i, i+1);
                swappedItems = true;
            }
        }

        if(!swappedItems) {
            break;
        }
    }
};