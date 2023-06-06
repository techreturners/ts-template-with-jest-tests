function handleProduct(productId: number | string | undefined) {
  console.log(`ID: ${productId}`);

  if (productId === undefined) return;

  productId.toString(); // exists on both string and number

  productId.toFixed(2); // exists ONLY on number

  // we have to NARROW the type
  // for primitive - i.e. built into JS we can use typeof
  if (typeof productId === "string") {
    productId.toLocaleUpperCase();
  } else {
    productId.toFixed(2);
  }
}

handleProduct(17);

handleProduct("ya12");

// handleProduct({ productId: 24601});
