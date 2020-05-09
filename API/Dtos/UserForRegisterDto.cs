using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage ="Kullanıcı adı girmediniz!")]
        public string Username { get; set; }

        [Required(ErrorMessage ="Şifre girmediniz!")]
        [StringLength(8, MinimumLength = 4, ErrorMessage ="Şifreniz en az 4 en fazla 8 karakterden oluşabilir.")]
        public string Password { get; set; }
    }
}