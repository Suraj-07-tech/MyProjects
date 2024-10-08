#include <stdio.h>
#include <math.h>
int findDigit(int bin_val)
{

    int i = 0;
    while (bin_val != 0)
    {
        bin_val = bin_val / 10;
        i++;
    }
    return i;
}

int convertedValue(int digits, int binaryValue)
{
    int i = 0;
    int sum = 0;
    while (binaryValue != 0)
    {
        int unit = binaryValue % 10;
        sum = sum + unit * (pow(2, i));
        i++;
        binaryValue = binaryValue / 10;
    }
    return sum;
}
int main()
{
    int binary_val;
    printf("Enter any Binary Number : ");
    scanf("%d", &binary_val);

    int digits = findDigit(binary_val);
    int converted_value = convertedValue(digits, binary_val);

    printf("The Decimal Value is : %d ", converted_value);

    return 0;
}