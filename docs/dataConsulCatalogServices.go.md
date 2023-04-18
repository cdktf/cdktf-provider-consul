# `data_consul_catalog_services`

Refer to the Terraform Registory for docs: [`data_consul_catalog_services`](https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services).

# `dataConsulCatalogServices` Submodule <a name="`dataConsulCatalogServices` Submodule" id="@cdktf/provider-consul.dataConsulCatalogServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulCatalogServices <a name="DataConsulCatalogServices" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services consul_catalog_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulcatalogservices"

dataconsulcatalogservices.NewDataConsulCatalogServices(scope Construct, id *string, config DataConsulCatalogServicesConfig) DataConsulCatalogServices
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig">DataConsulCatalogServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig">DataConsulCatalogServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.putQueryOptions">PutQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.resetQueryOptions">ResetQueryOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutQueryOptions` <a name="PutQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.putQueryOptions"></a>

```go
func PutQueryOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.putQueryOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.resetId"></a>

```go
func ResetId()
```

##### `ResetQueryOptions` <a name="ResetQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.resetQueryOptions"></a>

```go
func ResetQueryOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulcatalogservices"

dataconsulcatalogservices.DataConsulCatalogServices_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulcatalogservices"

dataconsulcatalogservices.DataConsulCatalogServices_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulcatalogservices"

dataconsulcatalogservices.DataConsulCatalogServices_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.names">Names</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.queryOptions">QueryOptions</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList">DataConsulCatalogServicesQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.services">Services</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.queryOptionsInput">QueryOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.names"></a>

```go
func Names() *[]*string
```

- *Type:* *[]*string

---

##### `QueryOptions`<sup>Required</sup> <a name="QueryOptions" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.queryOptions"></a>

```go
func QueryOptions() DataConsulCatalogServicesQueryOptionsList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList">DataConsulCatalogServicesQueryOptionsList</a>

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.services"></a>

```go
func Services() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QueryOptionsInput`<sup>Optional</sup> <a name="QueryOptionsInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.queryOptionsInput"></a>

```go
func QueryOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServices.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulCatalogServicesConfig <a name="DataConsulCatalogServicesConfig" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulcatalogservices"

&dataconsulcatalogservices.DataConsulCatalogServicesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	QueryOptions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#id DataConsulCatalogServices#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.queryOptions">QueryOptions</a></code> | <code>interface{}</code> | query_options block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#id DataConsulCatalogServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QueryOptions`<sup>Optional</sup> <a name="QueryOptions" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesConfig.property.queryOptions"></a>

```go
QueryOptions interface{}
```

- *Type:* interface{}

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#query_options DataConsulCatalogServices#query_options}

---

### DataConsulCatalogServicesQueryOptions <a name="DataConsulCatalogServicesQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulcatalogservices"

&dataconsulcatalogservices.DataConsulCatalogServicesQueryOptions {
	AllowStale: interface{},
	Datacenter: *string,
	Namespace: *string,
	Near: *string,
	NodeMeta: *map[string]*string,
	Partition: *string,
	RequireConsistent: interface{},
	Token: *string,
	WaitIndex: *f64,
	WaitTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.allowStale">AllowStale</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#allow_stale DataConsulCatalogServices#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.datacenter">Datacenter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#datacenter DataConsulCatalogServices#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#namespace DataConsulCatalogServices#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.near">Near</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#near DataConsulCatalogServices#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.nodeMeta">NodeMeta</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#node_meta DataConsulCatalogServices#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.partition">Partition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#partition DataConsulCatalogServices#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.requireConsistent">RequireConsistent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#require_consistent DataConsulCatalogServices#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.token">Token</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#token DataConsulCatalogServices#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.waitIndex">WaitIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#wait_index DataConsulCatalogServices#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.waitTime">WaitTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#wait_time DataConsulCatalogServices#wait_time}. |

---

##### `AllowStale`<sup>Optional</sup> <a name="AllowStale" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.allowStale"></a>

```go
AllowStale interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#allow_stale DataConsulCatalogServices#allow_stale}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#datacenter DataConsulCatalogServices#datacenter}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#namespace DataConsulCatalogServices#namespace}.

---

##### `Near`<sup>Optional</sup> <a name="Near" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.near"></a>

```go
Near *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#near DataConsulCatalogServices#near}.

---

##### `NodeMeta`<sup>Optional</sup> <a name="NodeMeta" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.nodeMeta"></a>

```go
NodeMeta *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#node_meta DataConsulCatalogServices#node_meta}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#partition DataConsulCatalogServices#partition}.

---

##### `RequireConsistent`<sup>Optional</sup> <a name="RequireConsistent" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.requireConsistent"></a>

```go
RequireConsistent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#require_consistent DataConsulCatalogServices#require_consistent}.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.token"></a>

```go
Token *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#token DataConsulCatalogServices#token}.

---

##### `WaitIndex`<sup>Optional</sup> <a name="WaitIndex" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.waitIndex"></a>

```go
WaitIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#wait_index DataConsulCatalogServices#wait_index}.

---

##### `WaitTime`<sup>Optional</sup> <a name="WaitTime" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptions.property.waitTime"></a>

```go
WaitTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/catalog_services#wait_time DataConsulCatalogServices#wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataConsulCatalogServicesQueryOptionsList <a name="DataConsulCatalogServicesQueryOptionsList" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulcatalogservices"

dataconsulcatalogservices.NewDataConsulCatalogServicesQueryOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataConsulCatalogServicesQueryOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.get"></a>

```go
func Get(index *f64) DataConsulCatalogServicesQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataConsulCatalogServicesQueryOptionsOutputReference <a name="DataConsulCatalogServicesQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v4/dataconsulcatalogservices"

dataconsulcatalogservices.NewDataConsulCatalogServicesQueryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataConsulCatalogServicesQueryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetAllowStale">ResetAllowStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetNear">ResetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetNodeMeta">ResetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetRequireConsistent">ResetRequireConsistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetWaitIndex">ResetWaitIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetWaitTime">ResetWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowStale` <a name="ResetAllowStale" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetAllowStale"></a>

```go
func ResetAllowStale()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNear` <a name="ResetNear" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetNear"></a>

```go
func ResetNear()
```

##### `ResetNodeMeta` <a name="ResetNodeMeta" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetNodeMeta"></a>

```go
func ResetNodeMeta()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetRequireConsistent` <a name="ResetRequireConsistent" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetRequireConsistent"></a>

```go
func ResetRequireConsistent()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetToken"></a>

```go
func ResetToken()
```

##### `ResetWaitIndex` <a name="ResetWaitIndex" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetWaitIndex"></a>

```go
func ResetWaitIndex()
```

##### `ResetWaitTime` <a name="ResetWaitTime" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.resetWaitTime"></a>

```go
func ResetWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.allowStaleInput">AllowStaleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.nearInput">NearInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.nodeMetaInput">NodeMetaInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.requireConsistentInput">RequireConsistentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.waitIndexInput">WaitIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.waitTimeInput">WaitTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.allowStale">AllowStale</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.near">Near</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.nodeMeta">NodeMeta</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.requireConsistent">RequireConsistent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.waitIndex">WaitIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.waitTime">WaitTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowStaleInput`<sup>Optional</sup> <a name="AllowStaleInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.allowStaleInput"></a>

```go
func AllowStaleInput() interface{}
```

- *Type:* interface{}

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NearInput`<sup>Optional</sup> <a name="NearInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.nearInput"></a>

```go
func NearInput() *string
```

- *Type:* *string

---

##### `NodeMetaInput`<sup>Optional</sup> <a name="NodeMetaInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.nodeMetaInput"></a>

```go
func NodeMetaInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `RequireConsistentInput`<sup>Optional</sup> <a name="RequireConsistentInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.requireConsistentInput"></a>

```go
func RequireConsistentInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `WaitIndexInput`<sup>Optional</sup> <a name="WaitIndexInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.waitIndexInput"></a>

```go
func WaitIndexInput() *f64
```

- *Type:* *f64

---

##### `WaitTimeInput`<sup>Optional</sup> <a name="WaitTimeInput" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.waitTimeInput"></a>

```go
func WaitTimeInput() *string
```

- *Type:* *string

---

##### `AllowStale`<sup>Required</sup> <a name="AllowStale" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.allowStale"></a>

```go
func AllowStale() interface{}
```

- *Type:* interface{}

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Near`<sup>Required</sup> <a name="Near" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.near"></a>

```go
func Near() *string
```

- *Type:* *string

---

##### `NodeMeta`<sup>Required</sup> <a name="NodeMeta" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.nodeMeta"></a>

```go
func NodeMeta() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `RequireConsistent`<sup>Required</sup> <a name="RequireConsistent" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.requireConsistent"></a>

```go
func RequireConsistent() interface{}
```

- *Type:* interface{}

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `WaitIndex`<sup>Required</sup> <a name="WaitIndex" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.waitIndex"></a>

```go
func WaitIndex() *f64
```

- *Type:* *f64

---

##### `WaitTime`<sup>Required</sup> <a name="WaitTime" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.waitTime"></a>

```go
func WaitTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulCatalogServices.DataConsulCatalogServicesQueryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



