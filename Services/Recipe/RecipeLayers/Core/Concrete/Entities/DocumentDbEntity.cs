using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Concrete.Entities
{

	public abstract class DocumentDbEntity
	{
		public ObjectId Id { get; set; }
		public string ObjectId => Id.ToString();
	}
}
