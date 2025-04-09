def word_count (file_path ,target_word):
      count = 0
 
 try:
    with open(file_path , ‘data.txt’) as file:
            for line in file : 
               words = line.split()
               for word in words: 
                           if word.lower() == target_word.lower():
                                count+=1
except IOError as e : 
    print (err)

print (f”tword’{target_word}’appears {count}”)


file_path = "C:\\Users\\El\\OneDrive - Tshwane University of Technology\\Documents\\NetBeansProjects\\GCD\\src\\input.txt"
target_word = "Java"
word_count(file_path, target_word)