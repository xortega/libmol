# Colorear según la estructura secundaria

Este esquema de coloración revela motivos específicos de la disposición de los aminoácidos en las cadenas proteicas conocidos como **estructuras secundarias**. Esta opción está disponible solo cuando las proteínas se seleccionan y se muestran en una representación simplificada ([esqueleto](display-backbone) o [cinta](display-cartoon)).

Las estructuras secundarias reconocidas son:
* [láminas beta](lexicon-strand),  
Las láminas beta (láminas β) son sucesiones lineares de aminoácidos combinadas generalmente para formar asociaciones planas o cilíndricas en la estructura de la proteína.
* [codos](lexicon-turn),  
Los codos son bruscos cambios de dirección en la orientación de una cadena de aminoácidos.
* [hélices alfa](lexicon-helix),  
Una hélice alfa (hélice α) aparece cuando la cadena de aminoácidos se enrolla a lo largo de un eje. Una hélice alfa contiene una media de 3,6 aminoácidos por vuelta.
* [hélices 3-10](lexicon-helix).  
Una hélice 3-10 es un motivo corto comparado con la hélice alfa ya que tiene solo 3 aminoácidos por vuelta.

Estos motivos son estabilizados mediante enlaces de hidrógeno entre los aminoácidos.

Las etiquetas de la barra de estado, debajo del marco de visualización, listan cada estructura secundaria con su correspondiente color.  
La asignación de estructuras secundarias a segmentos específicos de la cadena de aminoácidos es proporcionada por el fichero molecular. Si esta información no constase se realizaría un cálculo usando el método rápido de alineamiento Zhang & Skolnick TM, que podría dar resultados discrepantes.
