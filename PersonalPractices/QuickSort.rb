def quicksort(array)
    if (array.length == 1)
      return
    end
    startP = 0;
    endP = array.length - 1;
    sorting(array, startP, endP)
end

def sorting (array, startP, endP)
  if (startP >= endP)
    return  
  end

  pivot = array[endP]
  startPAux = startP
  endPAux = endP

  while (endPAux > startPAux)
    while (array[startPAux] <= pivot && endPAux > startPAux)
      startPAux += 1
    end

    while (array[endPAux] >= pivot && endPAux > startPAux)
      endPAux -= 1
    end

    switching(array, startPAux, endPAux)
  end

  switching(array, startPAux, endP)
  
  sorting(array, startP, startPAux - 1)
  sorting(array, startPAux + 1, endP)
end

def switching (array, index_1, index_2)
  aux = array[index_1]
  array[index_1] = array[index_2]
  array[index_2] = aux
end


array = []

for i in 0..19
  array.push(rand(1000))
end

quicksort(array)

print(array)