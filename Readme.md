# [Assignment: File Manager](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md)

<br/>

```
$ cat /etc/os-release | grep 'VERSION='
VERSION="20.04.4 LTS (Focal Fossa)"
```

<br/>

```
$ node -v
v16.15.1
```

<br/>

# Как запускаю

<br/>

```
// RUN APP
$ cd app/
$ npm run start -- --username=Someone
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
hash fileToCalculateHashFor.txt
```

<br/>

Я создал в проекте каталог с файлами из предыдущей задачи:

```
files\
```

И выполнял следующие команды для проверки в основном с этими файлами.

<br/>

### Проверка архитектуры:

<br/>

![part1](https://user-images.githubusercontent.com/10377914/174141056-66379427-a19d-4263-a880-468696ec4631.gif)

<br/>

```
up
cd
list
```

<br/>

```
os --EOL
os --cpus
os --homedir
os --username
os --architecture
```

<br/>

### Basic operations

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
cp fileToCopy.txt fileToCopy.txt.bkp
```

<br/>

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
add newFile.txt
```

<br/>

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
mv fileToRemove.txt /home/marley/tmp/


Проверки не в приложении, а в терминале прошли

// ls /home/marley/tmp/fileToRemove.txt
// cat /home/marley/tmp/fileToRemove.txt
// rm /home/marley/tmp/fileToRemove.txt
```

<br/>

/home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
cat fileToRead.txt
```

<br/>

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
rm fileToRemove.txt
```

<br/>

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
rn fileToCopy.txt NewFile.txt
```

<br/>

### Hash

<br/>

![part2](https://user-images.githubusercontent.com/10377914/174141233-61de2098-f9c3-4541-9b19-6b0b2a60ccc7.gif)

```
cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
ls
hash fileToCalculateHashFor.txt
```

<br/>

### Compress and decompress

<br/>

![part3](https://user-images.githubusercontent.com/10377914/174143133-c1c811c3-6588-486b-addb-4c9a23a2a8bf.gif)

```
$ npm run start -- --username=Someone
```

```
// Перехожу в каталог с файлами
$ cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
```

```
// Вывожу список
ls
```

```
// Читаю содержимое файла
cat fileToCompress.txt
```

```
// Архивирую
compress fileToCompress.txt
```

```
// Удаляю оригинал
rm fileToCompress.txt
```

```
// Смотрю, что файла уже нет
ls
```

```
// Разархивирую
decompress fileToCompress.txt.br
```

```
// Повторно читаю
cat fileToCompress.txt
```

<br/>

### Basic operations

**Долгий старт в начале**

<br/>

![part4](https://user-images.githubusercontent.com/10377914/174146257-0d557d50-9634-4c30-a11a-2e390040201d.gif)

```
// Запуск
$ npm run start -- --username=SomeoneElse
```

```
// Переходим в каталог с файлами
$ cd /home/marley/projects/dev/rss/rss-nodejs-2022-task2-file-manager/files/
```

<br/>

```
ls
```

<br/>

```
// Чтение файла
cat fileToCopy.txt
```

<br/>

```
// Копирование файла
cp fileToCopy.txt fileToCopy.txt.bkp
```

<br/>

```
// Чтение скопированного файла
cat fileToCopy.txt.bkp
```

<br/>

```
// Добавление нового файла
add newFile.txt
```

<br/>

```
ls
```

<br/>

```
// Удаление файла
rm fileToRemove.txt
```

<br/>

```
ls
```

<br/>

```
// Переименование файла
rn fileToCopy.txt NewCopyFile.txt
```

<br/>

```
// Чтение скопированного файла
cat NewCopyFile.txt
```

<br/>

```
ls
```

<br/>

```
// Перемещение скопированного файла в какую-то директорию на локальном компьютере
mv NewCopyFile.txt /home/marley/tmp/


Проверки не в приложении, а в терминале прошли

// ls /home/marley/tmp/NewCopyFile.txt
// cat /home/marley/tmp/NewCopyFile.txt
// rm /home/marley/tmp/NewCopyFile.txt
```

<br/>
<hr/>
<br/>

upd.
Вскрвшиеся косяки:

1. up перестала запирать в корне.
2. Некоторые краши останавливают работу приложения
