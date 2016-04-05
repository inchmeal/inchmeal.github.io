---
description: "Inchmeal | This page contains solutions for Structure and Interpretation of Computer Programs, SICP"
sitemap:
    exclude: 'yes'
---

#### Racket ####

{% highlight racket linenos %}

(require (for-syntax racket/base racket/list syntax/name)
         racket/match racket/private/arity)

;; ryanc: adjusted limit of inner cases from 8 to 2
;; All uses so far seem to be predicates, so more cases seem
;; unnecessary. Also, all uses so far are first-order, so
;; outer case-lambda* might be better replaced with macro.


(define (make-curry right?)
  ;; The real code is here
  (define (curry* f args kws kvs)
    (unless (procedure? f)
      (raise-argument-error (if right? 'curryr 'curry) "procedure?" f))
    (let* ([arity (procedure-arity f)]
           [max-arity (cond [(integer? arity) arity]
                            [(arity-at-least? arity) #f]
                            [(ormap arity-at-least? arity) #f]
                            [else (apply max arity)])]
           [n (length args)])
      (define (loop args n)
        (cond
          [(procedure-arity-includes? f n)
           (if (null? kws) (apply f args) (keyword-apply f kws kvs args))]
          [(and max-arity (n . > . max-arity))
           (apply raise-arity-error f arity args)]
          [else
           (letrec [(curried
                     (case-lambda
                       [() curried] ; return itself on zero arguments
                       [more (loop (if right?
                                     (append more args) (append args more))
                                   (+ n (length more)))]))]
             curried)]))
      ;; take at least one step if we can continue (there is a higher arity)
      (if (equal? n max-arity)
        (if (null? kws) (apply f args) (keyword-apply f kws kvs args))
        (letrec ([curried
                  (lambda more
                    (let ([args (if right?
                                  (append more args) (append args more))])
                      (loop args (+ n (length more)))))])
          curried))))
  ;; curry is itself curried -- if we get args then they're the first step
  (define curry
    (case-lambda [(f) (define (curried . args) (curry* f args '() '()))
                      curried]
                 [(f . args) (curry* f args '() '())]))
  (make-keyword-procedure (lambda (kws kvs f . args) (curry* f args kws kvs))
                          curry))

(define curry  (make-curry #f))
(define curryr (make-curry #t))
                       
{% endhighlight %}

#### Scala ####

{% highlight scala linenos %}

/*
 * Copyright (C) 2009-2016 Lightbend Inc. <http://www.lightbend.com>
 */

package akka.http.impl.engine.server

import java.net.InetSocketAddress

import akka.stream.Attributes

/**
 * INTERNAL API
 * Internally used attributes set in the HTTP pipeline.
 * May potentially be opened up in the future.
 */
private[akka] object HttpAttributes {
  import Attributes._

  private[akka] final case class RemoteAddress(address: Option[InetSocketAddress]) extends Attribute

  private[akka] def remoteAddress(address: Option[InetSocketAddress]) =
    Attributes(RemoteAddress(address))

}

{% endhighlight %}


#### Java ####

{% highlight java linenos %}

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Scanner;

import javax.swing.JFileChooser;
import javax.swing.UIManager;


public class WordCount {

    // allow user to pick file to exam via GUI.
    // allow multiple picks
    public static void countWordsViaGUI() {
        setLookAndFeel();
        try {
            Scanner key = new Scanner(System.in);
            do {
                System.out.println("Opening GUI to choose file.");
                Scanner fileScanner = new Scanner(getFile());
                Stopwatch st = new Stopwatch();
                st.start();
                ArrayList<String> words = countWordsWithArrayList(fileScanner);
                st.stop();
                System.out.println("time to count: " + st);
                System.out.print("Enter number of words to display: ");
                int numWordsToShow = Integer.parseInt(key.nextLine());
                showWords(words, numWordsToShow);
                fileScanner.close();
                System.out.print("Perform another count? ");
            } while(key.nextLine().toLowerCase().charAt(0) == 'y');
            key.close();
        }
        catch(FileNotFoundException e) {
            System.out.println("Problem reading the data file. Exiting the program." + e);
        }
    }

    // determine distinct words in a file using an array list
    private static ArrayList<String> countWordsWithArrayList(Scanner fileScanner) {
        System.out.println("Total number of words: " + numWords);
        System.out.println("number of distincy words: " + result.size());
        return result;
    }

}
{% endhighlight %}


#### Haskell ####

{% highlight haskell linenos %}

putTodo :: (Int, String) -> IO ()
putTodo (n, todo) = putStrLn (show n ++ ": " ++ todo)

prompt :: [String] -> IO ()
prompt todos = do
    putStrLn ""
    putStrLn "Current TODO list:"
    mapM_ putTodo (zip [0..] todos)
    command <- getLine
    interpret command todos

interpret :: String -> [String] -> IO ()
interpret ('+':' ':todo) todos = prompt (todo:todos)
interpret ('-':' ':num ) todos =
    case delete (read num) todos of
        Nothing -> do
            putStrLn "No TODO entry matches the given number"
            prompt todos
        Just todos' -> prompt todos'
interpret  "q"           todos = return ()
interpret  command       todos = do
    putStrLn ("Invalid command: `" ++ command ++ "`")
    prompt todos

delete :: Int -> [a] -> Maybe [a]
delete 0 (_:as) = Just as
delete n (a:as) = do
    as' <- delete (n - 1) as
    return (a:as')
delete _  []    = Nothing

main = do
    putStrLn "Commands:"
    putStrLn "+ <String> - Add a TODO entry"
    putStrLn "- <Int>    - Delete the numbered entry"
    putStrLn "q          - Quit"
    prompt []

{% endhighlight %}

