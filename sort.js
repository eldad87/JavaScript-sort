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

Array.prototype.selectionSort = function() {
    for(var i = 0; i < this.length; i++) {
        var minPos = i;
        for(var z = i; z < this.length; z++) {
            if(this[minPos] > this[z]) {
                minPos = z;
            }
        }
        if(i !== minPos) {
            this.swap(i, minPos);
        }
    }
};

Array.prototype.insertionSort = function() {
    for(var i = 0; i < this.length; i++) {
        var currentValue = this[i];
        var backwardLookup = i;
        while(backwardLookup > 0 && this[backwardLookup -1] > currentValue) {
            this[backwardLookup] = this[backwardLookup -1];
            backwardLookup--;
        }
        this[backwardLookup] = currentValue;
    }
};

Array.prototype.mergeSort = function() {
    if(this.length < 2) {
        return ;
    }
    var middle = Math.floor(this.length / 2);
    var left = this.slice(0, middle);
    var right = this.slice(middle);

    function merge(arr, left, right) {
        var arrPos = 0;
        while(left.length && right.length) {
            if(left[0] > right[0]) {
                arr[arrPos] = right.shift();
            } else {
                arr[arrPos] = left.shift();
            }
            arrPos++
        }
        // Add remaining items
        // Items left only in ONE of the following (and they ARE sorted):
        while(left.length) {
            arr[arrPos] = left.shift();
            arrPos++
        }
        while(right.length) {
            arr[arrPos] = right.shift();
            arrPos++
        }
    }

    left.mergeSort();
    right.mergeSort();
    merge(this, left, right);
};