interface ObjectValue{
    category: string;
    product?: string;
}

// function show({category, product}: {category: string, product: string}) {
//     console.log(category, product);
// };

function show({category, product}: ObjectValue) {
    console.log(category, product);
};

show({category: 'categoria'});

