function maskCpf(mask) {
    if (mask) {
        const maskArray = mask.split('');
        const maskedArray = [];
        const value = text.replace(/\D/g, '');
        let index = 0;
    
        let valueArray = value.split('');
    
        maskArray.forEach((v, i) => {
          if (v === '$') {
            maskedArray[i] = valueArray[index] ?? '';
            index = index + 1;
          } else {
            maskedArray[i] = valueArray[index] ? v : '';
          }
        });
    
        const valueMasked = maskedArray.join('');
    
        if (inputRef.current) {
          inputRef.current.value = valueMasked;
          inputRef.current.setNativeProps({ text: valueMasked });
          onChangeText && onChangeText(valueMasked);
          setCurrentValue(valueMasked);
          return;
        }
      }
}