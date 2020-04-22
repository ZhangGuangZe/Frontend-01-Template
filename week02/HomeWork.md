### 随堂练习

1. 编写十进制产生式

```
<Number> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" //1-9的整数

<Decimal> ::= "0" | (("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") <Number>*) //所有十进制数

```



2. 编写加法产生式

```

<Number> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" //1-9的整数

<Decimal> ::= "0" | (("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") <Number>*) //所有十进制数

<AdditionExpression> ::= <Decimal> | <AdditionExpression> "+" <Decimal> //加法运算

```



3. 编写带括号的四则运算产生式

```

<Number> ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" //1-9的整数

<Decimal> ::= "0" | (("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") <Number>*) //所有十进制数

//优先级

<PriorityExpression> ::= <Decimal> | "(" <logicalExpression> ")"

//乘除运算

<MultiplicationExpression> ::= <PriorityExpression> | <MultiplicationExpression> "*" <PriorityExpression> | <MultiplicationExpression> "/" <PriorityExpression> 

//加减运算

<AdditionExpression> ::= <AdditionExpression> | <AdditionExpression> "+" <MultiplicationExpression> | <AdditionExpression> "-" <MultiplicationExpression>

//逻辑运算

<logicalExpression> ::= <logicalExpression> | <logicalExpression> "||" <AdditionExpression> | <logicalExpression> "&&" <AdditionExpression>

```



### 课后作业

1. 写一个正则表达式 匹配所有 Number 直接量

```

[1-9]\d*\.?\d*)|(0\.\d*[1-9]\b0[xX][0-9a-fA-F]+\b/^[+-]?[\d]+([\.][\d]+)?([Ee][+-]?[\d]+)?$/

```

2. 写一个 UTF-8 Encoding 的函数

``` javascript
function EncodeUtf8(s1){
    var s = escape(s1);
    var sa = s.split("%");
    var retV ="";
    if(sa[0] != ""){
    	retV = sa[0];
    }
    for(var i = 1; i < sa.length; i ++){
        if(sa[i].substring(0,1) == "u"){
        	retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));
    	}
    	else retV += "%" + sa[i];
    }
   return retV;
}
function Str2Hex(s){
    var c = "";
    var n;
    var ss = "0123456789ABCDEF";
    var digS = "";
    for(var i = 0; i < s.length; i ++){
        c = s.charAt(i);
        n = ss.indexOf(c);
        digS += Dec2Dig(eval(n));
	}
    //return value;
    return digS;
}
function Dec2Dig(n1){
    var s = "";
    var n2 = 0;
    for(var i = 0; i < 4; i++){
        n2 = Math.pow(2,3 - i);
        if(n1 >= n2){
            s += '1';
            n1 = n1 - n2;
        }
        else
        s += '0';
	}
	return s;
}
function Dig2Dec(s){
    var retV = 0;
    if(s.length == 4){
        for(var i = 0; i < 4; i ++){
            retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);
        }
        return retV;
    }
    return -1;
} 
function Hex2Utf8(s){
    var retS = "";
    var tempS = "";
    var ss = "";
    if(s.length == 16){
    	tempS = "1110" + s.substring(0, 4);
    	tempS += "10" +  s.substring(4, 10); 
    	tempS += "10" + s.substring(10,16); 
    	var sss = "0123456789ABCDEF";
    	for(var i = 0; i < 3; i ++){
            retS += "%";
            ss = tempS.substring(i * 8, (eval(i)+1)*8);
            retS += sss.charAt(Dig2Dec(ss.substring(0,4)));
            retS += sss.charAt(Dig2Dec(ss.substring(4,8)));
    	}
    	return retS;
    }
    return "";
}
```

3. 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号