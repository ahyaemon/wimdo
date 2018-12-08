export const swap = (li: any[], idx1: number, idx2: number): any[] => {
    const newli = [...li];
    newli[idx1] = li[idx2];
    newli[idx2] = li[idx1];
    return newli;
};

export const download = (data: string, filename: string) => {
    const blob = new Blob([ data ], { type : 'text/plain' });

    if (window.navigator.msSaveBlob) {
        // IE
        window.navigator.msSaveBlob(blob, filename);
    } else {
        // IE以外
        const link = document.createElement('a');
        link.setAttribute('href', window.URL.createObjectURL(blob));

        link.setAttribute('download', filename);
        document.body.appendChild(link);

        link.click();
        link.remove();
    }
};

export const read = (inputFile: File): Promise<any> => {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
        temporaryFileReader.onerror = () => {
            temporaryFileReader.abort();
            reject(new DOMException('Problem parsing input file.'));
        };

        temporaryFileReader.onload = () => {
            resolve(temporaryFileReader.result);
        };
        temporaryFileReader.readAsText(inputFile);
    });
};
