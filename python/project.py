import tkinter as tk

janela = tk.Tk()
label = tk.Label(janela, 
                 text="Você ",
                 font=("sans-serif", 30),
                 fg="blue",
                 bg="yellow",
                 padx=20,)
label.pack(padx=20, pady=20)
janela.configure(bg="lightgrey")
janela.title("Minha Primeira Janela")
janela.geometry("550x800")
janela.mainloop()
