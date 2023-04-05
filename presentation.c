// Reads a string from stdin to a buffer
void getString(char* buffer) {
  int x = 0;
  char ch;
  while (1) {
    ch = getchar();
    if (ch == 10 | ch == -1)
      break;
    buffer[x++] = ch;
  }
  buffer[x] = 0;
  return;
}

// Converts a string to an int
int atoi(char* p) {
  int k = 0;
  while (*p) {
    k = k * 10 + (*p) - '0';
    p++;
  }
  return k;
}

// Reads an int from stdin
int getInt() {
  char arr[11];
  getString(arr);
  return atoi(arr);
}

// Returns the n-th fibonacci number
int fib(int n) {
  if (n < 2)
    return n;
  return fib(n - 1) + fib(n - 2);
}

// Converts an int to a string
char* itoa(int n, char* buffer) {
  char* p = buffer;
  if (n < 0) {
    *p = '-';
    n *= -1;
    p++;
  }

  int shifter = n;

  // Shift to the correct position
  do {
    p += 1;
    shifter = shifter / 10;
  } while (shifter);

  *p = 0;
  do {
    p--;
    *p = '0' + n % 10;
    n /= 10;
  } while (n);
  return buffer;
}

// Prints a string to stdout
void print(char* str) {
  // Prints a null terminated string
  while (*str) {
    putchar(*str);
    ++str;
  }
}

// Prints an int to stdout
void printInt(int n) {
  char arr[11];
  itoa(n, arr);
  print(arr);
  putchar(10);
}

int main() {
  // Read an int
  int _n = getInt();

  // Get the nth fibonacci number
  int n = fib(_n);

  // Convert the int to a char array
  char s[10];
  itoa(n, s);

  // Print the char array
  print(s);

  // Conver the string to an int and return it
  int i = atoi(s);
  return i;
}