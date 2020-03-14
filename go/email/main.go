// package main //包
// // node_mail go email
// import (
// 	"log"
// 	"net/smtp"

// 	"github.com/jordan-wright/email"
// )

// func main() { // 入口函数
// 	e := email.NewEmail() // := 定义并且附值
// 	e.From = "1742692285 <1742692285@qq.com>"
// 	// [] ? Array? 多个用户发邮件 { }集合
// 	e.To = []string{"cc1742692285@icloud.com"}
// 	e.Subject = "这是标题" //标题
// 	// byte? go 类型 byte
// 	e.Text = []byte("这里是内容，你好啊Chencc") //内容
// 	// 本地并没有搭建邮件服务器  由腾讯服务器转发
// 	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "1742692285@qq.com", "mwterhvuynipbcjc", "smtp.qq.com"))
// 	if err != nil {
// 		// console.log()
// 		// console.error()
// 		//打印错误 Fatal
// 		log.Fatal(err)
// 	}
// }
package main //包
// node_mail go email
import (
	"log"
	"net/smtp"

	"github.com/jordan-wright/email"
)

func main() { // 入口函数
	e := email.NewEmail() // := 定义并且附值
	e.From = "1742692285 <1742692285@qq.com>"
	// [] ? Array? 多个用户发邮件 { }集合
	// go 静态类型   js 弱类型被认为不安全
	e.To = []string{"cc1742692285@icloud.com"}
	e.Subject = "发送附件" //标题
	// byte? go 类型 byte  字节流
	// e.Text = []byte("至从考试一别， 已有两月， 我长发已及腿，我想你也是")//内容
	// 链接  多行字符
	e.HTML = []byte(`
	<ul>
		<li><a href="https://hichencc.com">Chencc个人博客</a></li>
	</ul>
	`)
	// 本地并没有搭建邮件服务器  由腾讯服务器转发
	e.AttachFile("1.jpg") // 附件
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "1742692285@qq.com", "mwterhvuynipbcjc", "smtp.qq.com"))
	if err != nil {
		// console.log()
		// console.error()
		//打印错误 Fatal
		log.Fatal(err)
	}
}
