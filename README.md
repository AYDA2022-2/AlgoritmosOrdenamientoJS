# AlgoritmosOrdenamientoJS
Algoritmos de Ordenamiento implementados en javascript.

Implementaciones propiedad de Carlos Benítez.
Programador Web y arquitecto Javascript. Fundador de www.etnassoft.com y OpenLibra, la Biblioteca Libre Online.

#Bubble Sort
La ordenación de burbuja presenta un esquema muy básico en el que se trabajan los elementos de un conjunto por pares. Cada elemento se compará así con su inmediato sucesor para ordenarse según sea mayor o menor que este. Una vez la pareja está ordenada correctamente, se toma el último número de cada tupla para volver a compararlo con el siguiente.

#Insertion Sort
Este algoritmo, tan sencillo como poco eficiente, trabaja analizando de forma secuencial cada elemento para trasladarlo a su posición correcta dentro del conjunto desplazando al resto.

#Selection Sort
Algoritmo en la línea de los anteriores en cuanto a complejidad. El procedimiento recorre el conjunto buscando el elemento de menor valor para intercambiarlo inmediatamente con el de la primera posición. De forma recursiva, se continúan buscando aquellos los siguientes elementos de menor valor para intercambiarlo con sus posiciones finales.

#Shell Sort
Para este algoritmo, podemos presentar dos posibles implementaciones; una con gaps fijos y otra en la que estos se calculan de forma dinámica a partir del propio conjunto de entrada.

El Shell sort es un ejemplo de algoritmo complejo donde los cálculos se reparten en vectores. Dichos vectores pueden contener a su vez otros subvectores con la característica de que todos permanecen k-ordenados mientras el espacio disminuye.

#Merge Sort
El algoritmo de ordenamiento por mezcla trabaja también mediante el concepto de sub listas. De este modo, el conjunto inicial se divide en dos sub conjuntos de aproximadamente igual tamaño para proceder a su ordenamiento de forma independiente. Finalmente, se mezclan ambos conjuntos para obtener el ordenamiento final.

#Quicksort
El algoritmo de ordenamiento rápido retoma de nuevo la aproximación del divide y vencerás: a partir de un elemento cualquiera de la lista, denominado pivote, resitua el conjunto restante a ambos lados según sus elementos sean mayores o menores que la muestra escogida. Este proceso se repite de forma recursiva hasta agotar una sublista, quedando con ello el conjunto ordenado.

